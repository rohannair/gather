import type { CloseWithGraceAsyncCallback } from "close-with-grace";
import closeWithGrace from "close-with-grace";

import { app } from "./app";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const { PORT = 3000, HOST = "0.0.0.0" } = process.env;

const start = async () => {
  const closeWithGraceCallback: CloseWithGraceAsyncCallback = async ({
    err,
  }) => {
    if (err) {
      app.log.error(err);
    }
    await app.close();
  };

  const closeListeners = closeWithGrace({ delay: 500 }, closeWithGraceCallback);

  app.addHook("onClose", (_instance, done) => {
    closeListeners.uninstall();
    done();
  });

  try {
    app.listen({
      host: String(HOST),
      port: Number(PORT),
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
