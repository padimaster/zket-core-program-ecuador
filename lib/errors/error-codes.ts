// lib/errors/error-codes.ts

// Primero, definimos la estructura de un error
export interface ErrorDefinition {
  code: string;       // Código único para el error (para uso interno y del frontend)
  message: string;    // Mensaje legible para el desarrollador o el usuario
  httpStatus: number; // Código de estado HTTP correspondiente
}

// Ahora, creamos nuestro diccionario de errores
export const ERROR_CODES = {
  // Errores Generales
  INTERNAL_SERVER_ERROR: {
    code: 'APP_001',
    message: 'Ocurrió un error inesperado en el servidor.',
    httpStatus: 500,
  },
  INVALID_INPUT: {
    code: 'APP_002',
    message: 'Los datos proporcionados son inválidos.',
    httpStatus: 400,
  },
  NOT_FOUND: {
    code: 'APP_003',
    message: 'El recurso solicitado no fue encontrado.',
    httpStatus: 404,
  },
  
  // Errores de Autenticación/Permisos
  UNAUTHORIZED: {
    code: 'AUTH_001',
    message: 'No autorizado. La autenticación falló.',
    httpStatus: 401,
  },

  // Errores de Servicios Externos
  BREVO_API_ERROR: {
    code: 'EXT_001',
    message: 'Hubo un problema al comunicarse con el servicio de correo.',
    httpStatus: 502, // 502 Bad Gateway es común para errores de servicios externos
  },
  // ... puedes agregar más errores aquí a medida que tu app crece
} as const; // 'as const' es un truco de TypeScript para hacerlo de solo lectura

// Un tipo útil para referenciar nuestros códigos de error
export type AppErrorCode = keyof typeof ERROR_CODES;