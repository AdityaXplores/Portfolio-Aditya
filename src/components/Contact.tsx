"use client";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { toast } from "react-hot-toast";
import { useState } from "react";

interface ValidationErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export const ContactSection = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateFullName = (name: string): string | null => {
    if (!name.trim()) {
      return "Full name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters long";
    }
    if (name.trim().length > 50) {
      return "Full name must be less than 50 characters";
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
      return "Full name can only contain letters, spaces, hyphens, and apostrophes";
    }
    return null;
  };

  const validateEmail = (email: string): string | null => {
    if (!email.trim()) {
      return "Email is required";
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    // Length validation
    if (email.length > 254) {
      return "Email address is too long";
    }

    const [localPart, domain] = email.split('@');
    
    // Local part validation
    if (localPart.length > 64) {
      return "Email username part is too long";
    }

    // Check for professional/institutional domains
    const professionalDomains = [
      // Universities
      '.edu', '.ac.', '.university', '.college',
      // Common university domains
      'mit.edu', 'stanford.edu', 'harvard.edu', 'berkeley.edu', 'oxford.ac.uk', 'cambridge.ac.uk',
      // Organizations
      '.org', '.gov', '.mil',
      // Corporate domains
      'google.com', 'microsoft.com', 'apple.com', 'amazon.com', 'meta.com', 'netflix.com',
      'adobe.com', 'salesforce.com', 'oracle.com', 'ibm.com', 'intel.com', 'nvidia.com',
      // Consulting/Professional services
      'mckinsey.com', 'bain.com', 'bcg.com', 'deloitte.com', 'pwc.com', 'ey.com', 'kpmg.com'
    ];

    const isProfessionalEmail = professionalDomains.some(domainPattern => 
      domain.toLowerCase().includes(domainPattern.toLowerCase())
    );

    // Check for common personal email domains
    const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'protonmail.com'];
    const isPersonalEmail = personalDomains.some(personalDomain => 
      domain.toLowerCase() === personalDomain
    );

    // For professional contexts, you might want to encourage institutional emails
    // Uncomment the following lines if you want to enforce institutional emails only
    /*
    if (!isProfessionalEmail && !isPersonalEmail) {
      return "Please use a university, organization, or recognized email address";
    }
    */

    return null;
  };

  const validateMessage = (message: string): string | null => {
    if (!message.trim()) {
      return "Message is required";
    }
    if (message.trim().length < 10) {
      return "Message must contain atleast 10 characters";
    }
    if (message.trim().length > 1000) {
      return "Message must be less than 1000 characters";
    }
    return null;
  };

  const validateForm = (formData: FormData): ValidationErrors => {
    const errors: ValidationErrors = {};
    
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const nameError = validateFullName(fullName);
    if (nameError) errors.fullName = nameError;

    const emailError = validateEmail(email);
    if (emailError) errors.email = emailError;

    const messageError = validateMessage(message);
    if (messageError) errors.message = messageError;

    return errors;
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target as HTMLFormElement);
    
    // Validate form
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are validation errors, don't submit
    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the errors in the form");
      setIsSubmitting(false);
      return;
    }

    try {
      formData.append("access_key", "28a0045e-2350-41af-9ee3-c02a527f5858");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      
      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! 🚀");
        // Reset form
        (event.target as HTMLFormElement).reset();
        setErrors({});
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="flex items-center justify-center">
        <div className="container max-w-2xl mx-auto px-4 py-14 flex flex-col items-center justify-center">
          <div className="mb-8 flex flex-col gap-2 items-center">
            <span className="flex items-center gap-2 text-lime-400 font-medium uppercase tracking-wider text-sm mb-2">
              <SparkleIcon className="size-5 text-lime-400" />
              Connect with me
            </span>
            <div className="bg-gray-950 border border-gray-800 px-4 py-2 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
              </div>
              <div className="text-sm font-semibold">Available for work</div>
            </div>
            <h2 className="text-white px-8 font-host-grotesk text-5xl sm:text-2xl md:px-16 md:text-5xl font-bold leading-tight text-center">
              <TextAnimate
                className="px-8"
                animation="blurInUp"
                by="character"
                duration={1}
              >
                Let&apos;s start a project together
              </TextAnimate>
            </h2>
          </div>
          <form
            className="space-y-6 flex flex-col items-center w-full"
            onSubmit={handleSubmit}
          >
            <div className="lg:w-96 sm:w-80 flex flex-col items-center">
              <label
                className="block text-white mb-2 self-start"
                htmlFor="fullName"
              >
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className={`lg:w-96 sm:w-80 rounded-lg bg-transparent border px-4 py-3 text-white focus:outline-none ${
                  errors.fullName 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-gray-700 focus:border-lime-400'
                }`}
                autoComplete="off"
              />
              {errors.fullName && (
                <span className="text-red-400 text-sm mt-1 self-start">
                  {errors.fullName}
                </span>
              )}
            </div>
            <div className="lg:w-96 sm:w-80 flex flex-col items-center">
              <label
                className="block text-white mb-2 self-start"
                htmlFor="email"
              >
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={`lg:w-96 sm:w-80 rounded-lg bg-transparent border px-4 py-3 text-white focus:outline-none ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-gray-700 focus:border-lime-400'
                }`}
                autoComplete="off"
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1 self-start">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="lg:w-96 sm:w-80 flex flex-col items-center">
              <label
                className="block text-white mb-2 self-start"
                htmlFor="message"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project... (minimum 10 characters)"
                className={`lg:w-96 sm:w-80 rounded-lg bg-transparent border px-4 py-3 text-white focus:outline-none resize-none ${
                  errors.message 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-gray-700 focus:border-lime-400'
                }`}
              ></textarea>
              {errors.message && (
                <span className="text-red-400 text-sm mt-1 self-start">
                  {errors.message}
                </span>
              )}
            </div>

            <InteractiveHoverButton 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </InteractiveHoverButton>
          </form>
        </div>
      </section>
    </>
  );
};