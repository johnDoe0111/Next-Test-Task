interface MainNewsDataItem {
  text: string;
  id: number;
  title: string,
  src?: string
}

interface CustomButtonProps {
  title: string,
  containerStyles?: string,
  btnType?: "button" | "submit",
}