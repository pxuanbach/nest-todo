import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME || "My App",
  url: process.env.APP_URL || "http://localhost:8000",
  port: parseInt(process.env.APP_PORT, 10) || 8000,
}));
