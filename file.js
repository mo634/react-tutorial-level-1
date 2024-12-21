const isAdult = (age) => {
    const ageLimit = 18;

    if (age >= ageLimit) {
        return true;
    }

    return false;
}