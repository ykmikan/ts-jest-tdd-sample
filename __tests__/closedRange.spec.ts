import ClosedRange from '../src/closedRange';
import assert from 'power-assert';

describe('整数の閉区間作成 ', () => {
    let closedRange: ClosedRange;

    beforeEach(() => {
        closedRange = new ClosedRange({ start: 3, end: 8 });
    });

    test('下端点と上端点を与えて閉区間が生成可能', () => {
        assert(closedRange instanceof ClosedRange);
    });

    test('閉区間から下端点を取得可能', () => {
        assert.equal(closedRange.start, 3);
    });

    test('閉区間から上端点を取得可能', () => {
        assert.equal(closedRange.end, 8);
    });

    test('閉区間から文字列表記を取得可能', () => {
        assert.equal(closedRange.toString(), "[3, 8]");
    });
});
