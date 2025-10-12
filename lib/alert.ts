import Swal from "sweetalert2";

export async function showSuccessAlert() {
  await Swal.fire({
    title: "🎉 Registration Successful!",
    html: `
      <p class="text-gray-700 mb-3">
        You’ve successfully registered for the <b>BlockchainUNN Conference 4.0</b>!
      </p>
      <p class="text-gray-700 mb-4">
        We’ve also sent you an email with more details and next steps —
        especially if you plan to join the <b>hackathon</b>. Please check your inbox or spam folder.
      </p>
      <a
        href="https://chat.whatsapp.com/D07e4foNhp701ERBBYynWK?mode=ems_copy_t"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-[#25D366] text-white font-semibold rounded-lg shadow hover:bg-[#1ebe5c] transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
          <path d="M16.72 13.68c-.28-.14-1.65-.82-1.9-.9-.26-.1-.45-.14-.63.14-.18.26-.72.9-.9 1.1-.16.18-.34.2-.62.08-.28-.14-1.18-.44-2.25-1.38-.83-.74-1.4-1.65-1.56-1.93-.16-.26-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.26.28-.44.1-.18.06-.34-.02-.48-.08-.14-.63-1.52-.86-2.1-.22-.52-.44-.44-.62-.44h-.52c-.18 0-.48.08-.74.34-.26.26-.96.94-.96 2.3s.98 2.68 1.12 2.86c.14.18 1.92 2.94 4.66 4.1.65.28 1.16.44 1.56.56.66.2 1.26.16 1.74.1.54-.08 1.65-.68 1.88-1.34.22-.66.22-1.22.16-1.34-.06-.12-.24-.18-.5-.3Z"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.52 3.5A10.47 10.47 0 0 0 3.5 20.52l-1.22 4.44 4.54-1.18A10.47 10.47 0 0 0 20.52 3.5ZM12 1.5c5.8 0 10.5 4.7 10.5 10.5 0 5.8-4.7 10.5-10.5 10.5a10.48 10.48 0 0 1-5.06-1.3L3 22l1.44-3.96A10.48 10.48 0 0 1 1.5 12C1.5 6.2 6.2 1.5 12 1.5Z"/>
        </svg>
        Join WhatsApp Group
      </a>
    `,
    icon: "success",
    confirmButtonText: "Got it!",
    confirmButtonColor: "#02641C",
    background: "#ffffff",
    color: "#0e0e0e",
    showCloseButton: true,
  });
}

export async function showHackathonSuccessAlert() {
  await Swal.fire({
    title: "🚀 Hackathon Registration Successful!",
    html: `
      <p class="text-gray-700 mb-3">
        You’ve successfully registered for the <b>BlockchainUNN 4.0 Hackathon</b>! 💡
      </p>
      <p class="text-gray-700 mb-4">
        A confirmation email has been sent to you with all the details you need to get started.
        Please check your inbox or spam folder.
      </p>
      <a
        href="https://chat.whatsapp.com/CgwTbfez5TbI5fJx9EyJDa?mode=wwc"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-[#25D366] text-white font-semibold rounded-lg shadow hover:bg-[#1ebe5c] transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
          <path d="M16.72 13.68c-.28-.14-1.65-.82-1.9-.9-.26-.1-.45-.14-.63.14-.18.26-.72.9-.9 1.1-.16.18-.34.2-.62.08-.28-.14-1.18-.44-2.25-1.38-.83-.74-1.4-1.65-1.56-1.93-.16-.26-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.26.28-.44.1-.18.06-.34-.02-.48-.08-.14-.63-1.52-.86-2.1-.22-.52-.44-.44-.62-.44h-.52c-.18 0-.48.08-.74.34-.26.26-.96.94-.96 2.3s.98 2.68 1.12 2.86c.14.18 1.92 2.94 4.66 4.1.65.28 1.16.44 1.56.56.66.2 1.26.16 1.74.1.54-.08 1.65-.68 1.88-1.34.22-.66.22-1.22.16-1.34-.06-.12-.24-.18-.5-.3Z"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.52 3.5A10.47 10.47 0 0 0 3.5 20.52l-1.22 4.44 4.54-1.18A10.47 10.47 0 0 0 20.52 3.5ZM12 1.5c5.8 0 10.5 4.7 10.5 10.5 0 5.8-4.7 10.5-10.5 10.5a10.48 10.48 0 0 1-5.06-1.3L3 22l1.44-3.96A10.48 10.48 0 0 1 1.5 12C1.5 6.2 6.2 1.5 12 1.5Z"/>
        </svg>
        Join Hackathon WhatsApp Group
      </a>
    `,
    icon: "success",
    confirmButtonText: "Awesome!",
    confirmButtonColor: "#02641C",
    background: "#ffffff",
    color: "#0e0e0e",
    showCloseButton: true,
  });
}
