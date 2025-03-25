import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col space-y-12">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions or feedback? We'd love to hear from you. Our team is here to help.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">support@studyai.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">
                      123 Education Lane
                      <br />
                      Learning City, ED 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">How does the AI tutor work?</h3>
                  <p className="text-muted-foreground">
                    Our AI tutor uses advanced machine learning to provide personalized assistance based on your
                    learning style and needs. It adapts to your pace and provides explanations tailored to your
                    understanding level.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Is my data secure on the platform?</h3>
                  <p className="text-muted-foreground">
                    Yes, we take data security seriously. All personal information and learning data is encrypted and
                    stored securely following industry best practices.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Can I access the platform on mobile devices?</h3>
                  <p className="text-muted-foreground">
                    Our platform is fully responsive and works on smartphones, tablets, and computers.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/faq">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    View All FAQs
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

