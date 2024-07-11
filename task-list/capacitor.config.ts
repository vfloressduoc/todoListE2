import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'task-list',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    Camera: {
      cameraUsageDescription: 'Necesitamos acceder a la cámara para tomar fotos'
    }
  }
};

export default config;
