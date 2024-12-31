function dateFormat(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
}

export default dateFormat;

export function formatDateInUzbekistan(date) {
  if (!date) {
    throw new Error("A valid date is required");
  }

  // Uzbekistan is in the UTC+5 timezone
  const options = {
    timeZone: "Asia/Tashkent",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  // Format the provided date
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
    new Date(date)
  );

  return formattedDate.replace(",", ","); // Format as "21 Nov 2024, 11:38"
}
