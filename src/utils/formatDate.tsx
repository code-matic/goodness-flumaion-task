export const formatDate = (dateValue: Date | string) => {
    if (typeof dateValue === "string") {
      const parts = new Date(dateValue).toISOString().split("T");
      const datePart = parts[0].split("-");
      const timePart = parts[1].split(":");

      const date = new Date();
      date.setFullYear(parseInt(datePart[0]));
      date.setMonth(parseInt(datePart[1]) - 1); 
      date.setDate(parseInt(datePart[2]));
      date.setHours(parseInt(timePart[0]));
      date.setMinutes(parseInt(timePart[1]));
      date.setSeconds(0);

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";

      hours = hours % 12;
      hours = hours ? hours : 12; // Convert 0 to 12 for 12 AM

      return `${month} ${day}, ${year} ${hours}:${minutes}${ampm}`;
    } else {
      // For Date objects, manually format to avoid timezone issues
      const date = dateValue;
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";

      hours = hours % 12;
      hours = hours ? hours : 12; // Convert 0 to 12 for 12 AM

      return `${month} ${day}, ${year} ${hours}:${minutes}${ampm}`;
    }
  };