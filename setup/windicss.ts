import { defineWindiSetup } from "@slidev/types";

export default defineWindiSetup(() => ({
  plugins: [require("windicss/plugin/forms")],
}));
