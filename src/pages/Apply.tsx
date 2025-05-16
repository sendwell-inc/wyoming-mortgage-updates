
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const personalInfoSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  address: z.string().min(1, { message: 'Address is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  zipCode: z.string().min(5, { message: 'ZIP code is required' }),
});

const financialInfoSchema = z.object({
  employmentStatus: z.string().min(1, { message: 'Employment status is required' }),
  monthlyIncome: z.string().min(1, { message: 'Monthly income is required' }),
  creditScore: z.string().min(1, { message: 'Credit score range is required' }),
  downPaymentAmount: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;
type FinancialInfoFormValues = z.infer<typeof financialInfoSchema>;

const Apply = () => {
  const [currentStep, setCurrentStep] = React.useState('personal');
  const [personalInfo, setPersonalInfo] = React.useState<PersonalInfoFormValues | null>(null);
  
  const personalForm = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: 'Wyoming',
      zipCode: '',
    },
  });
  
  const financialForm = useForm<FinancialInfoFormValues>({
    resolver: zodResolver(financialInfoSchema),
    defaultValues: {
      employmentStatus: '',
      monthlyIncome: '',
      creditScore: '',
      downPaymentAmount: '',
      additionalInfo: '',
    },
  });
  
  const handlePersonalInfoSubmit = (data: PersonalInfoFormValues) => {
    setPersonalInfo(data);
    setCurrentStep('financial');
  };
  
  const handleFinancialInfoSubmit = async (data: FinancialInfoFormValues) => {
    try {
      // Combine both forms data
      const applicationData = {
        ...personalInfo,
        ...data,
      };
      
      console.log('Application data submitted:', applicationData);
      
      // Simulate API submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Application submitted successfully!', {
        description: 'We will review your application and contact you shortly.',
      });
      
      // Clear forms and reset to first step
      personalForm.reset();
      financialForm.reset();
      setCurrentStep('personal');
      setPersonalInfo(null);
      
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('There was an error submitting your application. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply for a Mortgage</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Complete our simple application to get started on your home financing journey.
            </p>
          </div>
        </section>
        
        {/* Application Form */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="personal" disabled={currentStep === 'financial'}>
                      1. Personal Information
                    </TabsTrigger>
                    <TabsTrigger value="financial" disabled={!personalInfo}>
                      2. Financial Information
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="personal" className="p-4">
                    <Form {...personalForm}>
                      <form onSubmit={personalForm.handleSubmit(handlePersonalInfoSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={personalForm.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={personalForm.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={personalForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={personalForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input type="tel" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={personalForm.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Street Address</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <FormField
                            control={personalForm.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={personalForm.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                  <Input {...field} readOnly />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={personalForm.control}
                            name="zipCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>ZIP Code</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="flex justify-end">
                          <Button type="submit" className="bg-brand-navy hover:bg-brand-darkBlue">
                            Continue to Financial Information
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </TabsContent>
                  
                  <TabsContent value="financial" className="p-4">
                    <Form {...financialForm}>
                      <form onSubmit={financialForm.handleSubmit(handleFinancialInfoSubmit)} className="space-y-6">
                        <FormField
                          control={financialForm.control}
                          name="employmentStatus"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Employment Status</FormLabel>
                              <FormControl>
                                <select 
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                  {...field}
                                >
                                  <option value="" disabled>Select employment status</option>
                                  <option value="full-time">Full-time employed</option>
                                  <option value="part-time">Part-time employed</option>
                                  <option value="self-employed">Self-employed</option>
                                  <option value="retired">Retired</option>
                                  <option value="other">Other</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={financialForm.control}
                          name="monthlyIncome"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Monthly Income ($)</FormLabel>
                              <FormControl>
                                <Input type="text" placeholder="5000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={financialForm.control}
                          name="creditScore"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Approximate Credit Score</FormLabel>
                              <FormControl>
                                <select 
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                  {...field}
                                >
                                  <option value="" disabled>Select credit score range</option>
                                  <option value="excellent">Excellent (720+)</option>
                                  <option value="good">Good (680-719)</option>
                                  <option value="fair">Fair (620-679)</option>
                                  <option value="poor">Below 620</option>
                                  <option value="unknown">I don't know</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={financialForm.control}
                          name="downPaymentAmount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Down Payment Amount ($)</FormLabel>
                              <FormControl>
                                <Input type="text" placeholder="20000" {...field} />
                              </FormControl>
                              <FormDescription>
                                Approximate amount you plan to put as a down payment
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={financialForm.control}
                          name="additionalInfo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Information</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Share any additional information that might help us understand your situation better"
                                  className="min-h-[100px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => setCurrentStep('personal')}
                          >
                            Back to Personal Information
                          </Button>
                          <Button type="submit" className="bg-brand-navy hover:bg-brand-darkBlue">
                            Submit Application
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Process Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mortgage-header text-center mb-12">The Application Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="flex justify-center items-center mb-4 bg-brand-navy text-white w-16 h-16 rounded-full mx-auto">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
                <p className="text-gray-600">
                  Complete our online application form with your personal and financial information.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="flex justify-center items-center mb-4 bg-brand-navy text-white w-16 h-16 rounded-full mx-auto">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Document Review</h3>
                <p className="text-gray-600">
                  Our team reviews your application and requests any additional documentation needed.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="flex justify-center items-center mb-4 bg-brand-navy text-white w-16 h-16 rounded-full mx-auto">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Loan Approval</h3>
                <p className="text-gray-600">
                  Receive your loan approval and proceed with the closing process for your new home.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
