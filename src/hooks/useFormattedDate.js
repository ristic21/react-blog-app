import { format } from "date-fns";

function useFormattedDate(str = "2023-03-18T05:05:10.128Z", outputFormat = "yyyy-mm-dd hh:mm:ss") {
    const date = new Date(str);
    console.log(date)
    return format(date, outputFormat);
}

export default useFormattedDate;