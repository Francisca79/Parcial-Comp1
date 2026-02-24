Madeline Brunella Mejia Mejia
Francisca Del Carmen Bonilla Argueta

o ¿Qué valor agregado tiene el uso de webcomponents a su proyecto?
R// El uso de WebComponents permitió crear un componente personalizado llamado <buscador-libros>, lo que facilitó encapsular toda la lógica y estructura del buscador en una sola unidad reutilizable. Esto mejora la organización del código, evita conflictos con otros elementos del DOM y permite que el componente pueda reutilizarse en otros proyectos sin necesidad de modificar su funcionamiento interno. Además, aporta modularidad y una arquitectura más moderna orientada a aplicaciones escalables.

o ¿De qué forma manipularon los datos sin recargar la página?
R// La manipulación de datos se realizó utilizando JavaScript mediante eventos como oninput y onchange. Cada vez que el usuario escribe o selecciona una opción, se ejecuta una función que filtra el arreglo de libros y actualiza dinámicamente el contenido del contenedor de resultados usando el DOM. No se utilizó submit tradicional ni recarga de página, sino que se modificó directamente el innerHTML del componente, permitiendo una experiencia interactiva en tiempo real.

o ¿De qué forma validaron las entradas de datos? Expliquen brevemente
R// Se validó verificando que el usuario haya seleccionado un tipo de búsqueda antes de intentar filtrar. También se comprobó que los campos no estuvieran vacíos cuando eran necesarios para ejecutar el filtrado. En el caso del año, se manejó como valor numérico convertido a texto para evitar errores de comparación. Esto asegura que el sistema no procese búsquedas inválidas y mantiene la coherencia de los resultados mostrados.

o ¿Cómo manejaría la escalabilidad futura en su página?
R// En esta parte nosotras analizando como podriamos mejorar a futuro pensamos que para garantizar el crecimiento a largo plazo, el sistema lo podemos evolucionar llevandolo a crear una API y una bd tambien podriamos. Además, se podría implementar paginación de resultados, almacenamiento en la nube y autenticación de usuarios para roles como administrador o bibliotecario. También sería recomendable aplicar una arquitectura basada en componentes reutilizables y separación entre frontend y backend, lo que facilitaría el mantenimiento, actualización y expansión del sistema hacia una plataforma digital completa para gestión bibliotecaria.
