export class PropertyValueService{

    public transformPropertyIntoString(obj: object, paths: string[], format: string):string{
        let values: string[] = [];
        paths.forEach((path) => {
            let value = this.getValue(obj, path);
            values.push(value);
        });

        let result = this.setFormat(values, format);
        return result;
    }

    public getValue(obj: object, path: string): string{
        let value = "";

        if(!obj){
            return value;        
        }

        let properties = path.split('.');
        let object: any = obj;

        for (let index = 0; index < properties.length; index++) {
            const prop = properties[index];
            
            object = object[prop];

            if(!object){
                object = null;
                value = "";
                break;
            }
        }

        if(!object){
            return value;
        }

        return String(object);
    }

    public setFormat(values: string[], format: string): string {
        let str = '';

        if (!format) {
            values.forEach((v) => {
                str += v + ' ';
            });

            return str;
        }

        for (let index = 0; index < format.length; index++) {
            const ch = format[index];

            if (ch >= '0' && ch <= '9') {
                let index = Number(ch);
                str += values[index];
            } else {
                str += ch;
            }
        }

        return str;
    }
}