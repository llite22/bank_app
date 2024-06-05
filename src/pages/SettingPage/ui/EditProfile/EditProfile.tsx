import { Button } from "@/shared/ui/Button/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/Form/Form";
import { Input } from "@/shared/ui/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarImage } from "@/shared/ui/Avatar/Avatar";
import EditIcon from "@/shared/assets/icons/edit.svg?react";
import { Icon } from "@/shared/ui/Icon/Icon";
import { useState } from "react";
import { ImageModal } from "@/shared/ui/ImageModal/ImageModal";
import { useImage } from "../../api/imageUploadApi";
import { MoonLoader } from "react-spinners";

export const EditProfile = () => {
  const { t } = useTranslation();
  const { mutation } = useImage();
  const { mutate, isPending, isError, data } = mutation;
  const [isModal, setIsModal] = useState<boolean>(false);

  const formSchema = z.object({
    yourname: z.string().min(2, {
      message: t("Yourname must be at least 2 characters"),
    }),
    email: z.string().email({ message: t("Email must be valid") }),
    date_of_birth: z.string().min(2, {
      message: t("Date of Birth must be at least 2 characters"),
    }),
    permanent_address: z.string().min(2, {
      message: t("Permanent Address must be at least 2 characters"),
    }),
    postal_code: z.string().min(2, {
      message: t("Postal Code must be at least 2 characters"),
    }),
    username: z.string().min(2, {
      message: t("Username must be at least 2 characters"),
    }),
    password: z
      .string()
      .min(2, { message: t("Password must be at least 2 characters") }),
    present_address: z
      .string()
      .min(2, { message: t("Present Address must be at least 2 characters") }),
    city: z
      .string()
      .min(2, { message: t("City must be at least 2 characters") }),
    country: z
      .string()
      .min(2, { message: t("Country must be at least 2 characters") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      yourname: "",
      email: "",
      date_of_birth: "",
      permanent_address: "",
      postal_code: "",
      username: "",
      password: "",
      present_address: "",
      city: "",
      country: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const onOpenModal = () => {
    setIsModal(true);
  };

  const onCloseModal = () => {
    setIsModal(false);
  };

  return (
    <div className="flex justify-center items-center w-full p-16 gap-8 border-2 border-gray-200 rounded-3xl">
      <div className="flex self-start relative">
        {isPending && <MoonLoader color={"#36d7b7"} loading={true} size={60} />}
        {isError && <p>{t("Error")}</p>}
        <Avatar className="w-[130px] h-[130px]">
          <AvatarImage src={data ? data?.data.url : ""} alt="avatar" />
        </Avatar>
        <Icon
          onClick={onOpenModal}
          className="absolute bottom-0 right-0 cursor-pointer"
          Svg={EditIcon}
        />
      </div>
      {isModal && <ImageModal onCloseModal={onCloseModal} mutate={mutate} />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="min-w-[300px] flex w-full gap-12">
            <div className="w-[418px] space-y-4">
              <FormField
                control={form.control}
                name="yourname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Your name")}</FormLabel>
                    <FormControl>
                      <Input
                        className="border-2 rounded-lg border-gray-100"
                        placeholder={t("Your name")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Email")}</FormLabel>
                    <FormControl>
                      <Input
                        className="border-2 rounded-lg border-gray-100"
                        placeholder={t("Email")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date_of_birth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Date of Birth")}</FormLabel>
                    <FormControl>
                      <Input
                        className="border-2 rounded-lg border-gray-100"
                        placeholder={t("Date of Birth")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="permanent_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Permanent Address")}</FormLabel>
                    <FormControl>
                      <Input
                        className="border-2 rounded-lg border-gray-100"
                        placeholder={t("Permanent Address")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postal_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Postal Code")}</FormLabel>
                    <FormControl>
                      <Input
                        className="border-2 rounded-lg border-gray-100"
                        placeholder={t("Postal Code")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-[418px] space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Username")}</FormLabel>
                    <FormControl>
                      <Input
                        className="border-2 rounded-lg border-gray-100"
                        placeholder={t("Username")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Password")}</FormLabel>
                    <FormControl>
                      <Input
                        className="border-2 rounded-lg border-gray-100"
                        placeholder={t("Password")}
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="present_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Present Adress")}</FormLabel>
                    <FormControl>
                      <Input
                        className="border-2 rounded-lg border-gray-100"
                        placeholder={t("Present Adress")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("City")}</FormLabel>
                    <FormControl>
                      <Input
                        className="border-2 rounded-lg border-gray-100"
                        placeholder={t("City")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Country")}</FormLabel>
                    <FormControl>
                      <Input
                        className="border-2 rounded-lg border-gray-100"
                        placeholder={t("Country")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button
              className="border-2 rounded-lg border-sky-500 bg-blue-600 w-[190px] text-white hover:bg-blue-800"
              type="submit"
            >
              {t("Save")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
