import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'zvbkdj00',
    dataset: 'production',
    apiVersion: 'v1',
    useCdn: true,
    token: 'skvs2nbTYFQXw3OjMb4uIvZUfHik8zuDphrGR9nGA7i9O3KFwXkHgyWFcO2AqzhPrHWWgckrdN9Q24u9RtYHLsY3aYuZ5BZ2JCYSElTiqWfDIIrpOGB6HS8tIzViPR8pAm8PTanVxiYln6fYGhG5KcFSgBqs1RZ3QfnHma4eVtWnS7wguNOM',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);