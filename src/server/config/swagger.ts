import swaggerJSDoc, {
    OAS3Definition,
    OAS3Options,
} from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
    openapi: '3.0.0',
    info: {
        title: 'Documentación de la API de Grillas de Horarios',
        version: '1.0.0',
        description: 'Esta es la documentación de la API de Grillas de Horarios',
    },

    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local server',
        },
    ],

    components: {
        schemas: {
            Person: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number',
                        description: 'Id de la persona',
                    },

                    name: {
                        type: 'string',
                        description: 'Nombre de la persona',
                    },

                    surname: {
                        type: 'string',
                        description: 'Apellido de la persona',
                    },

                    age: {
                        type: 'number',
                        description: 'Edad de la persona',
                    },
                },
            },

            Program: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number',
                        description: 'Id del programa',
                    },

                    name: {
                        type: 'string',
                        description: 'Nombre del programa',
                    },

                    description: {
                        type: 'string',
                        description: 'Descripción del programa',
                    },

                    dayOfWeek: {
                        type: 'number',
                        description: 'Día de la semana en el que se emite el programa',
                    },

                    startTime: {
                        type: 'number',
                        description: 'Segundos transcurridos desde el comienzo del día cuando comienza el programa',
                    },

                    endTime: {
                        type: 'number',
                        description: 'Segundos transcurridos desde el comienzo del día cuando termina el programa',
                    },

                    conductores: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Person',
                        },
                    },

                    productores: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Person',
                        },
                    },

                },
            },

            Timegrid: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number',
                        description: 'Id de la grilla de horarios',
                    },

                    programs: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Program',
                        },
                    },

                },

            },
        },
    },
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ['./src/server/routes/*.ts'],
};

export default swaggerJSDoc(swaggerOptions);