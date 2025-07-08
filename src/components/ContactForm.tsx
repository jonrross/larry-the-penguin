import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useStore } from '@/store/useStore';
import { toast } from 'sonner';
import { FaPaperPlane, FaEnvelope, FaUser, FaEdit } from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addMessage = useStore((state) => state.addMessage);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      addMessage(data);
      toast.success('Message sent successfully! Larry will get back to you soon!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="max-w-2xl mx-auto border-2 border-penguin-blue-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-penguin-blue-500 to-penguin-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center gap-3">
            <FaEnvelope className="w-6 h-6" />
            Send Larry a Message
          </CardTitle>
          <p className="text-penguin-blue-100">
            Got questions about shows, meet & greets, or life in Vegas? Larry loves hearing from fans!
          </p>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaUser className="w-4 h-4 text-penguin-blue-500" />
                  Your Name
                </label>
                <Input
                  {...register('name')}
                  placeholder="Enter your name"
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaEnvelope className="w-4 h-4 text-penguin-blue-500" />
                  Email Address
                </label>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="your.email@example.com"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <FaEdit className="w-4 h-4 text-penguin-blue-500" />
                Subject
              </label>
              <Input
                {...register('subject')}
                placeholder="What's this about?"
                className={errors.subject ? 'border-red-500' : ''}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <Textarea
                {...register('message')}
                rows={6}
                placeholder="Tell Larry what's on your mind..."
                className={errors.message ? 'border-red-500' : ''}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-vegas-gold-500 hover:bg-vegas-gold-600 text-black font-bold py-3 text-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Sending...
                </div>
              ) : (
                <>
                  <FaPaperPlane className="w-5 h-5" />
                  Send Message to Larry
                </>
              )}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-penguin-blue-50 rounded-lg border border-penguin-blue-200">
            <p className="text-sm text-penguin-blue-700">
              <strong>💡 Pro Tip:</strong> Larry typically responds within 24 hours (when he's not busy with shows or swimming in fountains)!
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;