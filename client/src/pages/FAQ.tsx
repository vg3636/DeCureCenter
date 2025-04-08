import { Helmet } from 'react-helmet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is an ocular prosthetic?",
    answer: "An ocular prosthetic (artificial eye) is a custom-made device created to replace an eye lost due to trauma, disease, or congenital conditions. Modern prosthetics are designed to match the appearance of your natural eye and are typically made from medical-grade acrylic materials."
  },
  {
    question: "How long does it take to create a custom prosthetic eye?",
    answer: "The process of creating a custom prosthetic eye typically takes 2-3 visits over a period of 1-2 weeks. During the first visit, we take measurements and impressions. The second visit involves fitting and adjustments, and the final visit is when you receive the completed prosthetic."
  },
  {
    question: "Will a prosthetic eye restore my vision?",
    answer: "No, a prosthetic eye does not restore vision. It's a cosmetic device designed to restore the natural appearance of the eye and maintain the structure of the eye socket."
  },
  {
    question: "How do I care for my prosthetic eye?",
    answer: "Proper care includes gentle cleaning with specialized solutions, avoiding harsh chemicals, removing it periodically as recommended by your specialist, and attending regular check-ups. We provide detailed care instructions tailored to your specific needs."
  },
  {
    question: "How long does a prosthetic eye last?",
    answer: "With proper care, a prosthetic eye typically lasts 3-5 years before needing replacement. However, we recommend annual check-ups to ensure optimal fit and appearance, as changes in the eye socket can occur over time."
  },
  {
    question: "Is the process of fitting a prosthetic eye painful?",
    answer: "The fitting process is not painful. Most patients experience mild discomfort similar to having contact lenses fitted. Our specialists use gentle techniques and can provide numbing drops if needed to ensure your comfort."
  },
  {
    question: "Does insurance cover ocular prosthetics?",
    answer: "Many insurance plans cover ocular prosthetics, especially when medically necessary. Coverage varies by provider and plan. Our administrative team can help verify your insurance benefits and assist with the claims process."
  },
  {
    question: "How realistic do prosthetic eyes look?",
    answer: "Modern prosthetic eyes can be remarkably realistic. Our specialists meticulously match color, size, and even tiny blood vessels to create a prosthetic that closely resembles your natural eye. Most people cannot tell the difference from a conversational distance."
  },
  {
    question: "Can children receive prosthetic eyes?",
    answer: "Yes, children can be fitted with prosthetic eyes. In fact, it's important for children to receive prosthetics early to support proper facial development. Our specialists have extensive experience working with pediatric patients and their unique needs."
  },
  {
    question: "Do I need to remove my prosthetic eye at night?",
    answer: "This depends on your specific situation. Some patients leave their prosthetics in continuously, while others benefit from removing them at night. Your specialist will provide personalized recommendations based on your eye socket health and comfort."
  }
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - De Cure Center</title>
        <meta name="description" content="Find answers to common questions about ocular prosthetics, care procedures, and services at De Cure Center." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-neutral-700">
              Find answers to common questions about our ocular prosthetic services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-w-3xl mx-auto mt-12 p-6 bg-neutral-100 rounded-lg">
            <h2 className="text-xl font-semibold text-primary-600 mb-4">Still Have Questions?</h2>
            <p className="text-neutral-700 mb-6">
              Our team is here to help. Contact us for personalized answers to your questions or to schedule a consultation.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="font-medium mr-2">Call us:</span>
                <a href="tel:+911234567890" className="text-primary-600 hover:underline">+91 1234 567 890</a>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Email:</span>
                <a href="mailto:info@decurecenter.com" className="text-primary-600 hover:underline">info@decurecenter.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default FAQ;
