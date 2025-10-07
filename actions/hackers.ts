/* eslint-disable @typescript-eslint/no-explicit-any */
import { api, API_ROUTES } from "@/lib/api";
import handleError, { handleSuccess } from "@/lib/handleResponse";
import { HackathonRegistrationForm } from "@/types/hacker.types";

export const registerForBlockathon2025Hack = async (
  payload: HackathonRegistrationForm
) => {
  try {
    const { data } = await api.post(API_ROUTES.hackers.create("2"), {
      ...payload,
    });

    return handleSuccess(
      data,
      "You have successfully registered for the Blockathon 2025 Hackathon!"
    );
  } catch (error: any) {
    return handleError(error);
  }
};
