/**
 * Implement chainMaker object according to task description
 */
export default {
    list: [],

    getLength() {
        return this.list.length;
    },
    addLink(value) {
        if (String(value)) {
            this.list.push('( ' + (String(value)) + ' )');
        } else {
            this.list.push('( )');
        }
        return this;
    },
    removeLink(position) {
        if (Number(position) !== position || this.list.length < position || position <= 0) {
            this.list = [];
            throw new Error('You can\'t remove incorrect link!');
        }
        this.list.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.list.reverse();
        return this;
    },
    finishChain() {
        const res = this.list.join('~~');
        this.list = [];
        return res;
    }
};
