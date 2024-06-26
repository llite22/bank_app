import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/Form/Form";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/features/AuthByUsername/api/UserApi";
import { MoonLoader } from "react-spinners";

const LoginForm = () => {
  const { t } = useTranslation();
  const { mutate, isPending, isError } = useAuth();

  const formSchema = z.object({
    username: z.string().min(2, {
      message: t("Username must be at least 2 characters"),
    }),
    password: z
      .string()
      .min(2, { message: t("Password must be at least 2 characters") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  if (isPending) {
    return (
      <div className="flex w-full justify-center items-center h-[100vh]">
        <MoonLoader color={"#36d7b7"} loading={true} size={70} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[100vh]">Error</div>
    );
  }

  const onSubmit = (data: z.infer<typeof formSchema>) => mutate(data);

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-4 border-dashed rounded-lg border-sky-500 p-16"
        >
          <div className="min-w-[300px] space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Username")}</FormLabel>
                  <FormControl>
                    <Input
                      autoFocus
                      className="border-4 border-double rounded-lg border-sky-500"
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
                      className="border-4 border-double rounded-lg border-sky-500"
                      placeholder={t("Password")}
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full border-4 border-double rounded-lg border-sky-500 bg-blue-800 "
              type="submit"
            >
              {t("Login")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
