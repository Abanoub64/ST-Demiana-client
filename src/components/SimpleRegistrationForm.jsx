import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SimpleRegistrationForm() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        تسجيل الدخول
      </Typography>

      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="اسم الخادم" />
          <Input type="password" size="lg" label="كلمة المرور" />
        </div>

        <Button className="mt-6 text-2xl" fullWidth>
          دخول
        </Button>
      </form>
    </Card>
  );
}
