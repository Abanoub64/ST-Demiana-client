import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["مصدر العلاج", "اسم العلاج", "الشخص"];

export function MedTables({ data }) {
  const { Childrenlist, father, mother } = data;
  return (
    <Card className="h-full w-full overflow-scroll">
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
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              {father.medication.map((item, index) => (
                <Typography
                  key={index}
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {item.source}
                </Typography>
              ))}
            </td>
            <td className="p-4">
              {father.medication.map((item, index) => (
                <Typography
                  key={index}
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {item.name}
                </Typography>
              ))}
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                الاب
              </Typography>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              {mother.medication.map((item, index) => (
                <Typography
                  key={index}
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {item.source}
                </Typography>
              ))}
            </td>
            <td className="p-4">
              {mother.medication.map((item, index) => (
                <Typography
                  key={index}
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {item.name}
                </Typography>
              ))}
            </td>
            <td className="p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                الام
              </Typography>
            </td>
          </tr>
          {Childrenlist.map((item, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                {item.medication.map((med2, indexnumber2) => (
                  <Typography
                    key={indexnumber2}
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {med2.source}
                  </Typography>
                ))}
              </td>
              <td className="p-4">
                {item.medication.map((med, indexnumber) => (
                  <Typography
                    key={indexnumber}
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {med.name}
                  </Typography>
                ))}
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {item.name}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
