import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Heart, Brain, Users } from 'lucide-react';
import CTASection from '../../components/CTASection';

const Oncology = () => {
  return (
    <>
      <Helmet>
        <title>Oncology - De Cure Center</title>
        <meta name="description" content="Comprehensive cancer care at De Cure Center with multidisciplinary treatment approaches, advanced diagnostics, and personalized therapy plans." />
      </Helmet>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-600 mb-4">Oncology</h1>
            <p className="text-lg text-neutral-700">
              Comprehensive cancer care and treatment
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">Integrated Cancer Care</h2>
              <p className="text-neutral-800 mb-4">
                At De Cure Center, our oncology department provides comprehensive care for cancer patients through an integrated, multidisciplinary approach. Our team of oncologists, surgeons, radiologists, pathologists, and support staff work together to deliver personalized treatment plans tailored to each patient's specific diagnosis and needs.
              </p>
              <p className="text-neutral-800">
                We combine cutting-edge diagnostic technology, innovative treatment modalities, and compassionate care to achieve the best possible outcomes. Our focus extends beyond just treating the disease – we're committed to supporting your overall wellbeing throughout your cancer journey.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Oncologist consulting with patient"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <Tabs defaultValue="diagnostics" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
              <TabsTrigger value="treatments">Treatments</TabsTrigger>
              <TabsTrigger value="specialties">Cancer Specialties</TabsTrigger>
              <TabsTrigger value="support">Support Services</TabsTrigger>
            </TabsList>

            <TabsContent value="diagnostics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Advanced Imaging</h3>
                    <p className="text-neutral-700 mb-4">
                      State-of-the-art imaging technologies for accurate cancer detection, staging, and treatment monitoring.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>CT scans with 3D reconstruction</li>
                      <li>MRI with specialized cancer protocols</li>
                      <li>PET-CT for metabolic imaging</li>
                      <li>Digital mammography</li>
                      <li>Ultrasound-guided procedures</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Biopsy Services</h3>
                    <p className="text-neutral-700 mb-4">
                      Comprehensive tissue sampling procedures performed with precision for definitive diagnosis.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Fine needle aspiration (FNA)</li>
                      <li>Core needle biopsies</li>
                      <li>Excisional biopsies</li>
                      <li>Image-guided biopsies</li>
                      <li>Minimally invasive techniques</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Molecular Diagnostics</h3>
                    <p className="text-neutral-700 mb-4">
                      Advanced laboratory testing to identify genetic mutations and molecular markers for targeted therapy selection.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Next-generation sequencing (NGS)</li>
                      <li>Biomarker identification</li>
                      <li>PCR-based testing</li>
                      <li>Immunohistochemistry</li>
                      <li>Liquid biopsy capabilities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Cancer Screening Programs</h3>
                    <p className="text-neutral-700 mb-4">
                      Proactive screening services for early detection and prevention of various cancers.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Colonoscopy screening</li>
                      <li>Breast cancer screening</li>
                      <li>Cervical cancer screening</li>
                      <li>Prostate cancer screening</li>
                      <li>Lung cancer screening for high-risk individuals</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="treatments">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Medical Oncology</h3>
                    <p className="text-neutral-700 mb-4">
                      Comprehensive chemotherapy and systemic treatment options administered by experienced oncologists.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Traditional chemotherapy protocols</li>
                      <li>Targeted therapy options</li>
                      <li>Immunotherapy treatments</li>
                      <li>Hormone therapy</li>
                      <li>Combination therapy approaches</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Surgical Oncology</h3>
                    <p className="text-neutral-700 mb-4">
                      Expert surgical interventions for cancer treatment performed by specialized oncologic surgeons.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Minimally invasive surgical techniques</li>
                      <li>Organ-preserving surgeries</li>
                      <li>Reconstructive procedures</li>
                      <li>Lymph node dissections</li>
                      <li>Cytoreductive surgery</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Radiation Oncology</h3>
                    <p className="text-neutral-700 mb-4">
                      Precision radiation therapy using advanced technology to target cancer cells while sparing healthy tissue.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>External beam radiation therapy</li>
                      <li>Intensity-modulated radiation therapy (IMRT)</li>
                      <li>Image-guided radiation therapy (IGRT)</li>
                      <li>Stereotactic radiosurgery</li>
                      <li>Brachytherapy</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Innovative Therapies</h3>
                    <p className="text-neutral-700 mb-4">
                      Access to emerging treatments and clinical trials for patients who qualify.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>CAR T-cell therapy access</li>
                      <li>Clinical trial participation</li>
                      <li>Precision medicine approaches</li>
                      <li>Radiofrequency ablation</li>
                      <li>Photodynamic therapy</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specialties">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Activity className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Thoracic Oncology</h3>
                    <p className="text-neutral-700">
                      Specialized care for lung cancer, mesothelioma, and other thoracic malignancies with multidisciplinary treatment planning.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Heart className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Breast Cancer Care</h3>
                    <p className="text-neutral-700">
                      Comprehensive breast cancer services from early detection to advanced treatment, including breast-conserving approaches.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Brain className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Neuro-Oncology</h3>
                    <p className="text-neutral-700">
                      Specialized treatment for brain tumors and neurological cancers with advanced surgical and radiation techniques.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Gastrointestinal Oncology</h3>
                    <p className="text-neutral-700">
                      Expert care for cancers of the digestive system, including colorectal, pancreatic, liver, and stomach cancers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Gynecologic Oncology</h3>
                    <p className="text-neutral-700">
                      Specialized treatment for female reproductive cancers, including ovarian, uterine, cervical, and vulvar malignancies.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 text-center">Urologic Oncology</h3>
                    <p className="text-neutral-700">
                      Comprehensive care for prostate, bladder, kidney, and testicular cancers with focus on function preservation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <Users className="h-10 w-10 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-600 mb-3">Psychosocial Support</h3>
                        <p className="text-neutral-700 mb-3">
                          Comprehensive emotional and psychological support services for patients and families.
                        </p>
                        <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                          <li>Individual counseling</li>
                          <li>Support groups</li>
                          <li>Family therapy</li>
                          <li>Stress management techniques</li>
                          <li>Coping skill development</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <Activity className="h-10 w-10 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-600 mb-3">Rehabilitation Services</h3>
                        <p className="text-neutral-700 mb-3">
                          Specialized rehabilitation to address physical changes and functional challenges during and after cancer treatment.
                        </p>
                        <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                          <li>Physical therapy</li>
                          <li>Occupational therapy</li>
                          <li>Speech and swallowing therapy</li>
                          <li>Lymphedema management</li>
                          <li>Cancer-specific exercise programs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Nutritional Support</h3>
                    <p className="text-neutral-700 mb-3">
                      Specialized nutrition services to help manage side effects and maintain optimal nutritional status.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Personalized dietary planning</li>
                      <li>Management of treatment-related issues</li>
                      <li>Nutritional supplement recommendations</li>
                      <li>Cooking and meal preparation guidance</li>
                      <li>Enteral nutrition support when needed</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3">Palliative Care</h3>
                    <p className="text-neutral-700 mb-3">
                      Specialized care focused on relieving symptoms and improving quality of life for patients with serious illness.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Pain management</li>
                      <li>Symptom control</li>
                      <li>Coordination of care</li>
                      <li>Advance care planning</li>
                      <li>Quality of life focus at all stages</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 bg-neutral-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6 text-center">Our Multidisciplinary Approach</h2>
            <p className="text-neutral-700 mb-8 text-center max-w-3xl mx-auto">
              At De Cure Center, we believe that the most effective cancer care requires collaboration among specialists from different disciplines. Our tumor board meetings bring together experts to review each case and develop optimal treatment strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Personalized Assessment</h3>
                <p className="text-sm text-neutral-700">Comprehensive evaluation of your cancer diagnosis, health status, and personal preferences</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Collaborative Planning</h3>
                <p className="text-sm text-neutral-700">Development of integrated treatment strategies through multidisciplinary team discussions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Coordinated Care</h3>
                <p className="text-sm text-neutral-700">Seamless delivery of all aspects of your treatment with regular reassessment and plan adjustments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Oncology;
