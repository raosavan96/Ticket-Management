"use client";
import BreadcrumbSec from "@/components/ui/application/BreadcrumbSec";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodSchema } from "@/lib/zodSchema";
import InputField from "@/components/ui/application/inputs/InputField";
import SelectBox from "@/components/ui/application/selection/SelectBox";
import DatePickerField from "@/components/ui/application/datePicker/DatePickerField";
import AttachmentUploader from "@/components/ui/application/attachmentUploader/AttachmentUploader";
import Editor from "@/components/ui/application/editor/Editor";
import RelatedDetails from "@/components/ui/application/relatedDetails/RelatedDetails";
import ButtonLoading from "@/components/ui/application/ButtonLoading";

const AddTicket = () => {
  const [statusOptions, setStatusOptions] = useState([{
    label: 'Active',
    value: 'active',
  }]);
  const [TicketOwnerOptions, setTicketOwnerOptions] = useState([{
    label: 'Active',
    value: 'active',
  }]);
  const [langOptions, setLangOptions] = useState([{
    label: 'Active',
    value: 'active',
  }]);
  const [priorityOptions, setPriorityOptions] = useState([{
    label: 'Active',
    value: 'active',
  }]);
  const [channelOptions, setChannelOptions] = useState([{
    label: 'Active',
    value: 'active',
  }]);
  const [classifications, setClassifications] = useState([{
    label: 'Active',
    value: 'active',
  }]);

  const mainStyle = 'w-full border-b border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none shadow-none'

  const formSchema = zodSchema.pick({
    contactName: true,
    accountName: true,
    email: true,
    phone: true,
    subject: true,
    description: true,
    status: true,
    ticketOwner: true,
    language: true,
    priority: true,
    channel: true,
    classifications: true,
    dueDate: true,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: "",
      accountName: "",
      email: "",
      phone: "",
      subject: "",
      description: "",
      status: "",
      ticketOwner: "",
      language: "",
      priority: "",
      channel: "",
      classifications: "",
      dueDate: "",
      attachments: [],
    },
  });

  const handleEditor = async (e, editor) => {
    const data = editor.getData();
    form.setValue("description", data);
  };

  const handleSubmit = async (values) => {
    console.log("Form Submitted Data:", values);
  };

  const breadCrumbData = [
    { href: "/", label: "Home" },
    { href: "/tickets", label: "Tickets" },
    { href: "/tickets/add-ticket", label: "Add Ticket" },
  ];

  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-20 py-3 bg-white px-5 shadow-sm">
        <BreadcrumbSec breadcrumbData={breadCrumbData} />
      </div>

      <div className="md:px-20 px-4 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 col-span-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="bg-white rounded-md px-5 py-5 shadow-sm">
                  <h1 className="text-lg md:text-xl font-semibold text-[#4a5568]">
                    Ticket Information
                  </h1>

                  <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-10 gap-y-8 mt-8">
                    <div className="md:col-span-6 col-span-12">
                      <InputField
                        control={form.control}
                        name="contactName"
                        label="Contact Name"
                        isRequire
                        type="text"
                        style="w-full"
                        mainStyle={mainStyle}
                      />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <InputField
                        control={form.control}
                        name="accountName"
                        label="Account Name"
                        isRequire
                        type="text"
                        style="w-full"
                        mainStyle={mainStyle}
                      />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <InputField
                        control={form.control}
                        name="email"
                        label="Email"
                        isRequire
                        type="email"
                        style="w-full"
                        mainStyle={mainStyle}
                      />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <InputField
                        control={form.control}
                        name="phone"
                        label="Phone"
                        isRequire
                        type="number"
                        style="w-full"
                        mainStyle={mainStyle}
                      />
                    </div>

                    <div className="col-span-12">
                      <InputField
                        control={form.control}
                        name="subject"
                        label="Subject"
                        isRequire
                        type="text"
                        style="w-full"
                        mainStyle={mainStyle}
                      />
                    </div>

                    <div className="col-span-12">
                      <FormLabel className="mb-2">
                        Description <span className="text-[red]">*</span>
                      </FormLabel>
                      <Editor
                        value={form.watch("description")}
                        onChange={handleEditor}
                      />
                      <FormMessage />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Status <span className="text-[red]">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectBox
                                options={statusOptions}
                                selected={field.value}
                                setSelected={field.onChange}
                                isMulti={false}
                                mainStyle={mainStyle}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <FormField
                        control={form.control}
                        name="ticketOwner"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Ticket Owner <span className="text-[red]">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectBox
                                options={TicketOwnerOptions}
                                selected={field.value}
                                setSelected={field.onChange}
                                isMulti={false}
                                mainStyle={mainStyle}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-white rounded-md px-5 py-5 mt-4 shadow-sm">
                  <h1 className="text-lg md:text-xl font-semibold text-[#4a5568]">
                    Additional Information
                  </h1>

                  <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-10 gap-y-8 mt-8">
                    <div className="md:col-span-6 col-span-12">
                      <DatePickerField
                        control={form.control}
                        name="dueDate"
                        label="Due Date"
                        isRequire
                        placeholder="Select due date"
                        mode="single"
                        mainStyle={mainStyle}
                      />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <FormField
                        control={form.control}
                        name="language"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Language <span className="text-[red]">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectBox
                                options={langOptions}
                                selected={field.value}
                                setSelected={field.onChange}
                                isMulti={false}
                                mainStyle={mainStyle}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <FormField
                        control={form.control}
                        name="priority"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Priority <span className="text-[red]">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectBox
                                options={priorityOptions}
                                selected={field.value}
                                setSelected={field.onChange}
                                isMulti={false}
                                mainStyle={mainStyle}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <FormField
                        control={form.control}
                        name="channel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Channel <span className="text-[red]">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectBox
                                options={channelOptions}
                                selected={field.value}
                                setSelected={field.onChange}
                                isMulti={false}
                                mainStyle={mainStyle}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <FormField
                        control={form.control}
                        name="classifications"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Classifications{" "}
                              <span className="text-[red]">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectBox
                                options={classifications}
                                selected={field.value}
                                setSelected={field.onChange}
                                isMulti={false}
                                mainStyle={mainStyle}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Attachments */}
                <div className="bg-white rounded-md px-5 py-5 mt-4 shadow-sm">
                  <AttachmentUploader
                    onFilesChange={(files) =>
                      console.log("Selected files:", files)
                    }
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end mt-6 mb-5">
                  <ButtonLoading
                    type="submit"
                    text="Submit"
                    loading={false}
                    variant="default"
                    className="px-8"
                  />
                </div>
              </form>
            </Form>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 col-span-12 bg-white rounded-md shadow-sm h-auto lg:h-[calc(79vh-0px)] sticky lg:top-16 overflow-y-auto">
            <RelatedDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTicket;
