export const formatDate = (dateTimestamp: any) => {
    const date = new Date(dateTimestamp);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    });
};