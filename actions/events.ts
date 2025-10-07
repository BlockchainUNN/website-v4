/* eslint-disable @typescript-eslint/no-explicit-any */
import { api, API_ROUTES } from "@/lib/api";
import handleError, { handleSuccess } from "@/lib/handleResponse";
import { RegistrationPayload } from "@/types/event.type";

export const registerForBlockathon2025 = async (
  payload: RegistrationPayload
) => {
  try {
    const { data } = await api.post(API_ROUTES.events.registration("2"), {
      registrationDetails: payload,
    });

    return handleSuccess(
      data,
      "You have successfully registered for the Blockathon 2025!"
    );
  } catch (error: any) {
    return handleError(error);
  }
};
