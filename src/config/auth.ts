const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error(
    "JWT_SECRET não definido. Configure a variável de ambiente antes de subir o servidor."
  );
}

export const JWT_SECRET = secret;
