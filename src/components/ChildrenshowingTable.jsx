import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "اب الاعتراف",
  "المرحلة العمرية",
  "السن",
  "رقم الموبايل",
  "الاسم",
];

export function ChildrenshowingTable({ data }) {
  const { Childrenlist } = data;
  return (
    <Card className="h-full my-6 w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b text-center border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className=" font-black text-lg leading-none opacity-100"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Childrenlist.map((childrens, index) => {
            let ageName = "";
            switch (childrens.age_stage) {
              case 0:
                ageName = "حضانة";
                break;

              case 1:
                ageName = "Kg1";
                break;

              case 2:
                ageName = "Kg2";
                break;

              case 3:
                ageName = "اولي ابتدائي";
                break;

              case 4:
                ageName = "تانية ابتدائي";
                break;

              case 5:
                ageName = "تالتة ابتدائي";
                break;

              case 6:
                ageName = "رابعة ابتدائي";
                break;

              case 7:
                ageName = "خامسة ابتدائي";
                break;

              case 8:
                ageName = "سادسة ابتدائي";
                break;

              case 9:
                ageName = "اولي اعدادي";
                break;

              case 10:
                ageName = "تانية اعدادي";
                break;

              case 11:
                ageName = "تالتة اعدادي";
                break;

              case 12:
                ageName = "اولي ثانوي";
                break;

              case 13:
                ageName = "تانية ثانوي";
                break;

              case 14:
                ageName = "تالتة ثانوي";
                break;

              case 15:
                ageName = "جامعة";
                break;

              case 16:
                ageName = "خريج";
                break;

              default:
                break;
            }

            const calculateAge = (childrens) => {
              const birthDate = new Date(childrens.birthdate);
              const today = new Date();

              let age = today.getFullYear() - birthDate.getFullYear();

              // Check if the birthday has already occurred this year
              const hasBirthdayOccurred =
                today.getMonth() > birthDate.getMonth() ||
                (today.getMonth() === birthDate.getMonth() &&
                  today.getDate() >= birthDate.getDate());

              // Subtract 1 from the age if the birthday has not occurred yet this year
              if (!hasBirthdayOccurred) {
                age--;
              }

              return age;
            };
            return (
              <tr key={index} className="even:bg-blue-gray-50/50  text-center">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {childrens.confession}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {ageName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {calculateAge(childrens)}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {childrens.phone}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {childrens.name}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
