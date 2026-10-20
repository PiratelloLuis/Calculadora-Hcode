
class CalcController {
    constructor() {

        this._operation = [];
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonEvents();
    }

    initialize() {
        this.setDisplayDateTime();

        let interval = setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    addEventListenerAll(element, events, func) {
        events.split(" ").forEach((event) => {
            element.addEventListener(event, func, false);
        });
    }

    clearAll() {
        this._operation = [];
    }

    cancelEntry() {
        this._operation.pop();
    }

    sum() {

    }

    addOperation(value) {

        this._operation.push(value);
        console.log( this._operation);
    }

    setError() {
        this.displayCalc = "Error";
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.cancelEntry();
                break;

            case 'soma':
                this.sum();
                break;

            case 'subtracao':
                this.sub();
                break;

            case 'divisao':
                this.division();
                break;

            case 'multiplicacao':
                this.multiply();
                break;

            case 'porcento':
                this.percent();
                break;

            case 'igual':
                this.percent();
                break;


            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        }
    }

    initButtonEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", (event) => {
                let textBtn = btn.className.baseVal.replace("btn-", "");
                this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", (event) => {
                btn.style.cursor = "pointer";
            });
        });
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });

        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        return (this._timeEl.innerHTML = value);
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        return (this._dateEl.innerHTML = value);
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }
}
