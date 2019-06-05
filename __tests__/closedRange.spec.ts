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

    describe('閉区間が指定した整数を含む場合、trueを返す', () => {
        test('下端点指定したとき', () => {
            assert.equal(closedRange.contains(3), true);
        })
        test('上端点指定したとき', () => {
            assert.equal(closedRange.contains(8), true);
        })
    });

    describe('閉区間が指定した整数を含まない場合、falseを返す', () => {
        test('下端点より小さい値を指定した場合', () => {
            assert.equal(closedRange.contains(2), false);
        })

        test('上端点より大きい値を指定した場合', () => {
            assert.equal(closedRange.contains(9), false);
        })
    });

});

