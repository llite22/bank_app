import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/Card/Card";
import ChipCardIcon from "@/shared/assets/icons/chip-card.svg?react";
import CardFooterIcon from "@/shared/assets/icons/card-footer.svg?react";
import { Icon } from "@/shared/ui/Icon/Icon";

export const BankCard = ({
  data,
  isPending,
  inverted = false,
}: {
  data?: any;
  isPending?: boolean;
  inverted?: boolean;
}) => {
  const formatCardNumber = (cardNumber: number): string => {
    if (!cardNumber) return "";

    const cardNumberString = cardNumber.toString();
    const firstFourDigits = cardNumberString.slice(0, 4);
    const lastFourDigits = cardNumberString.slice(-4);
    const maskedMiddle = "*".repeat(8);

    return `${firstFourDigits} ${maskedMiddle} ${lastFourDigits}`;
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center w-full h-[100vh]">
        Loading...
      </div>
    );
  }

  const color = `${inverted ? "text-black" : "text-white"} `;

  return (
    <div className="p-4">
      <Card
        className={`min-w-[350px] rounded-3xl  ${
          inverted ? "bg-white" : "bg-blue-600"
        }`}
      >
        <CardHeader>
          <div className="flex items-center justify-between p-2">
            <div>
              <CardDescription className={color}>Balance</CardDescription>
              <CardTitle className={color}>${data[0]?.balance}</CardTitle>
            </div>
            <Icon Svg={ChipCardIcon} />
          </div>
        </CardHeader>
        <CardContent className="flex justify-between min-w-[300px] ">
          <div>
            <p className={color}>Card Holder</p>
            <h1 className={color}>{data[0]?.name}</h1>
          </div>
          <div>
            <p className={color}>VALID THRU</p>
            <h1 className={color}>{data[0]?.date}</h1>
          </div>
        </CardContent>
        {inverted && <hr />}
        <CardFooter
          className={`flex items-center justify-between ${
            inverted ? "" : "bg-blue-700"
          } rounded-b-2xl p-4`}
        >
          <h1 className={`${color} text-xl`}>
            {formatCardNumber(data[0]?.number_card)}
          </h1>
          <Icon
            className={`${inverted ? "fill-black" : "fill-white"}`}
            Svg={CardFooterIcon}
          />
        </CardFooter>
      </Card>
    </div>
  );
};
