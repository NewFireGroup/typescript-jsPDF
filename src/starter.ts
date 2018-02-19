
class Mocks {
    static loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros turpis. Vivamus tempor urna vitae sapien mollis molestie. Vestibulum in lectus non enim bibendum laoreet at at libero. Etiam malesuada erat sed sem blandit in varius orci porttitor. Sed at sapien urna. Fusce augue ipsum, molestie et adipiscing at, varius quis enim. Morbi sed magna est, vel vestibulum urna. Sed tempor ipsum vel mi pretium at elementum urna tempor. Nulla faucibus consectetur felis, elementum venenatis mi mollis gravida. Aliquam mi ante, accumsan eu tempus vitae, viverra quis justo.\n\nProin feugiat augue in augue rhoncus eu cursus tellus laoreet. Pellentesque eu sapien at diam porttitor venenatis nec vitae velit. Donec ultrices volutpat lectus eget vehicula. Nam eu erat mi, in pulvinar eros. Mauris viverra porta orci, et vehicula lectus sagittis id. Nullam at magna vitae nunc fringilla posuere. Duis volutpat malesuada ornare. Nulla in eros metus. Vivamus a posuere libero.';
}

class MyService {
    private doc: any;

    constructor() {
        this.doc = new jsPDF('p', 'in', 'letter');
    }

    public createPdf() {
        this.doc.setFont('courier');
        this.doc.setFontType('normal');
        this.doc.text(1, 1, 'This is courier normal.');

        this.doc.setFont('times');
        this.doc.setFontType('italic');
        this.doc.text(1, 1.5, 'This is times italic.');

        this.doc.setFont('helvetica');
        this.doc.setFontType('bold');
        this.doc.text(1, 2, 'This is helvetica bold.');

        this.doc.setFont('courier');
        this.doc.setFontType('bolditalic');
        this.doc.text(1, 2.5, 'This is courier bolditalic.');

        this.doc.setFontType('normal');
        this.doc.text(1, 3, 'Ready for a bunch of words?');

        const lines = this.doc.splitTextToSize(Mocks.loremipsum, 6.5);
        this.doc.text(1, 3.5, lines);

        return this.doc.output('datauristring');
    }
}

const pdfService = new MyService();
