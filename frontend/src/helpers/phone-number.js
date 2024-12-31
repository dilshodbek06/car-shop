export function formatUzbekistanPhoneNumber(phoneNumber) {
  // Remove all non-digit characters
  const digits = phoneNumber.replace(/\D/g, "");

  // Check if the number has the required length (12 digits for Uzbekistan numbers)
  if (digits.length !== 12 || !digits.startsWith("998")) {
    throw new Error("Invalid Uzbekistan phone number format");
  }

  // Format the number as +998 XX XXX XX XX
  const formatted = `+${digits.slice(0, 3)} ${digits.slice(
    3,
    5
  )} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10)}`;

  return formatted;
}
