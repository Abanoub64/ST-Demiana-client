import { Button, Card, Typography } from "@material-tailwind/react";

export function ChildrenTable({ Childrenlist = [], update }) {
  const TABLE_HEAD = ["مسح", "السن", "المرحلة التعليمية", "الموبايل", "الاسم"];
  const deleteItem = (childrens) => {
    console.log(Childrenlist);
    update((prevItems) =>
      prevItems.filter((items) => items.name !== childrens)
    );
    console.log(Childrenlist);
  };

  return (
    <Card className="h-full my-6 w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td>
                  <Button
                    className=" bg-red-600"
                    onClick={() => {
                      deleteItem(childrens.name);
                    }}
                  >
                    مسح
                  </Button>
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
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {childrens.educationlevel}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {childrens.phone}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
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
