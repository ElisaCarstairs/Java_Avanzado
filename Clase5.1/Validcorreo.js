const ValidEmail = (email) => {
    const incluye_arroba = email.includes('@');
    const incluye_punto = email.includes('.');
    return incluye_arroba && incluye_punto
}