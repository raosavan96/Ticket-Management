import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RelatedDetails = () => {
  return (
    <div className="col-span-4 bg-white rounded-md shadow-sm h-[calc(79vh-0px)] sticky top-16 overflow-y-auto">
      <Accordion type="single" collapsible defaultValue="related-details">
        {/* Related Details */}
        <AccordionItem value="related-details">
          <AccordionTrigger className="text-[12px] uppercase tracking-wide px-4 bg-gray-50">
            Related Details
          </AccordionTrigger>
          <AccordionContent className={`px-3 `}>
            <Accordion type="single" collapsible className='mt-3 shadow-md rounded' defaultValue="contact-info">
              {/* Contact Information */}
              <AccordionItem value="contact-info" className="border-b">
                <AccordionTrigger className="px-4 bg-white">
                  Contact Information
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="border-none shadow-none">
                    <CardHeader className="flex items-center justify-start gap-3 px-4  pb-2">
                      <Avatar className="w-12 h-12 text-lg font-semibold">
                        <AvatarFallback>LA</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-[15px] font-semibold">Lawrence</h3>
                        <p className="text-xs text-gray-500">Zoho</p>
                      </div>
                    </CardHeader>

                    <CardContent className="px-4 space-y-3 text-sm">
                      <div>
                        <p className="text-gray-500">Email</p>
                        <p className="font-medium text-blue-600 cursor-pointer">
                          support@zohosupport.com
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">Phone</p>
                        <p className="font-medium">1 888 900 9646</p>
                      </div>

                      <div>
                        <p className="text-gray-500">Address</p>
                        <p className="font-medium">
                          Hacienda Drive, Pleasanton, CA, Unit 101
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-500">Title</p>
                        <p className="font-medium">
                          Customer Support Executive
                        </p>
                      </div>

                      {/* Contact Owner */}
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-gray-500">Contact Owner</p>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src="/images/savan.jpg" alt="Savan" />
                              <AvatarFallback>SY</AvatarFallback>
                            </Avatar>
                            <p className="font-medium">Savan Yadav</p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Created Time */}
                      <div>
                        <p className="text-gray-500">Contact Created Time</p>
                        <p className="font-medium">03 Nov 10:04 AM</p>
                      </div>

                      {/* Additional Info Example */}
                      <div>
                        <p className="text-gray-500">Department</p>
                        <p className="font-medium">Customer Success</p>
                      </div>

                      <div>
                        <p className="text-gray-500">Reports To</p>
                        <p className="font-medium">Manager - John Smith</p>
                      </div>

                      <div>
                        <p className="text-gray-500">Last Contacted</p>
                        <p className="font-medium">29 Oct 05:30 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>

        {/* Marketplace Extensions */}
        <AccordionItem value="marketplace">
          <AccordionTrigger className="px-4 bg-gray-50">
            Marketplace Extensions
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 py-2 text-sm text-gray-600">
              No extensions found.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default RelatedDetails;
