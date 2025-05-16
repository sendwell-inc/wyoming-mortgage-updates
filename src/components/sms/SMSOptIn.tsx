
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageSquareText, Check } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  phoneNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .refine((val) => /^[0-9()\-\s+]*$/.test(val), {
      message: 'Please enter a valid phone number',
    }),
  loanNumber: z.string().optional(),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms and conditions' }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const SMSOptIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      loanNumber: '',
      acceptTerms: false as any,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log('SMS opt-in data:', data);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Successfully enrolled in SMS updates!', {
        description: 'You will now receive text message updates about your mortgage application.',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error enrolling you in SMS updates. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg border-0 card-hover">
      <CardHeader className="bg-gradient-to-r from-brand-navy to-brand-darkBlue text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <MessageSquareText className="h-5 w-5" />
          </div>
          <CardTitle className="text-2xl font-semibold">SMS Updates</CardTitle>
        </div>
        <CardDescription className="text-gray-100 text-base">
          Stay informed on your mortgage application status via text message
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John" 
                        {...field} 
                        className="border-gray-200 focus:border-brand-navy focus:ring-brand-navy/20" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Doe" 
                        {...field} 
                        className="border-gray-200 focus:border-brand-navy focus:ring-brand-navy/20" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Mobile Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(307) 555-1234" 
                      type="tel" 
                      {...field} 
                      className="border-gray-200 focus:border-brand-navy focus:ring-brand-navy/20" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="loanNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">Loan Number</span> 
                    <span className="text-xs text-gray-500 font-normal">(if available)</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Example: WY123456789" 
                      {...field} 
                      className="border-gray-200 focus:border-brand-navy focus:ring-brand-navy/20" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-100 bg-gray-50/50 p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                      icon={<Check className="h-4 w-4" />}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-gray-700">
                      I agree to receive SMS text messages about my mortgage application
                    </FormLabel>
                    <FormMessage />
                    <p className="text-xs text-gray-500 mt-1">
                      Message and data rates may apply. You can opt out at any time by replying STOP to any message.
                    </p>
                  </div>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end px-6 pb-6 pt-2">
        <Button 
          onClick={form.handleSubmit(onSubmit)}
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enrolling...' : 'Enroll in SMS Updates'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SMSOptIn;
