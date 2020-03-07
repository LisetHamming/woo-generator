    const locale = ("nl-NL");
    const dateFormatter = new Intl.DateTimeFormat(locale);
    const formatDate = dateFormatter.format.bind(dateFormatter);

    export default formatDate