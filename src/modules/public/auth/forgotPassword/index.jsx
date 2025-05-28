import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordFormSchema } from "../../../../lib/validations";
import { Button, Input } from "../../../../generalComponents";
import { Logo } from "../../../../assets/svgAssets";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../../../api/auth";
import { showErrorToast, showSuccessToast } from "../../../../lib/toastUtils";

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordFormSchema),
  });

  const { mutate: forgotPasswordMutation, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      if (data.status !== "success") {
        showErrorToast(data.message);
        return;
      }

      reset();

      showSuccessToast(data.message);
    },
    onError: (error) => {
      showErrorToast(error.message);
    },
  });

  const onSubmit = (data) => {
    forgotPasswordMutation(data);
  };

  useEffect(() => {
    document.title = "Forgot Password | Radyab-e-Zakhm";
  }, []);

  return (
    <main className="w-full bg-surface min-h-screen flex items-center justify-center py-16 px-4 sm:px-0">
      <div className="px-4 w-full p-12 sm:px-12 bg-neutral-0 dark:bg-neutral-950 dark:border-neutral-800 max-w-[540px]  flex flex-col gap-4 lg:gap-8 border border-neutral-200 rounded-xl md:rounded-[48px] shadow-lg dark:shadow-none">
        <div className="flex flex-col gap-1 items-center text-center">
          <h2 className="text-display-sm font-medium  text-primary-text">
            Forgotten your password?
          </h2>
          <p className="text-md font-medium text-secondary-text">
            Enter your email below, and we’ll send you a link to reset it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          <Input
            placeholder="email@@example.com"
            label="Email Address"
            registerProps={register("email")}
            error={errors.email?.message}
          />

          <Button
            type="submit"
            label={isPending ? "Loading..." : "Send Reset Link"}
            disabled={isPending}
          />
        </form>
      </div>
    </main>
  );
};
