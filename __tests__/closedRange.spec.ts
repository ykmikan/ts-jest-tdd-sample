import ClosedRange from '../src/closedRange';
import assert from 'power-assert';

describe('整数の閉区間作成 ', () => {
    const ME_START = 3;
    const ME_END = 8;

    let closedRange: ClosedRange;


    beforeEach(() => {
        closedRange = new ClosedRange({ start: ME_START, end: ME_END });
    });

    test('下端点と上端点を与えて閉区間が生成可能', () => {
        assert(closedRange instanceof ClosedRange);
    });

    test('閉区間から下端点を取得可能', () => {
        assert.equal(closedRange.start, ME_START);
    });

    test('閉区間から上端点を取得可能', () => {
        assert.equal(closedRange.end, ME_END);
    });

    test('閉区間から文字列表記を取得可能', () => {
        assert.equal(closedRange.toString(), `[${ME_START}, ${ME_END}]`);
    });

    test('下端点 >= 上端点の場合生成出不可能', () => {
        assert.throws( () => {
          new ClosedRange({start: ME_END, end: ME_START})
        }, (err: Error) => {
          assert(err.message === 'start < endに違反しています')
          return true;
        })
      });

    describe('閉区間が指定した整数を含む場合、trueを返す', () => {
        test('下端点指定したとき', () => {
            assert.equal(closedRange.contains(ME_START), true);
        })
        test('上端点指定したとき', () => {
            assert.equal(closedRange.contains(ME_END), true);
        })
    });

    describe('閉区間が指定した整数を含まない場合、falseを返す', () => {
        test('下端点より小さい値を指定した場合', () => {
            assert.equal(closedRange.contains(ME_START - 1), false);
        })

        test('上端点より大きい値を指定した場合', () => {
            assert.equal(closedRange.contains(ME_END + 1), false);
        })
    });

    describe('閉区間同士の比較', () => {
        test('閉区間が別の閉区間と等しい', () => {
            const otherClosedRange: ClosedRange = new ClosedRange({ start: ME_START, end: ME_END });

            assert.equal(closedRange.equals(otherClosedRange), true);
        })

        test('閉区間が別の閉区間と等しくない(startは同じだが、 endが違う)', () => {
            const otherClosedRange: ClosedRange = new ClosedRange({ start: ME_START, end: ME_END + 1 });

            assert.equal(closedRange.equals(otherClosedRange), false);
        })

        test('閉区間が別の閉区間と等しくない(endは同じだが、 startが違う)', () => {
            const otherClosedRange: ClosedRange = new ClosedRange({ start: ME_START - 1, end: ME_END });

            assert.equal(closedRange.equals(otherClosedRange), false);
        })
    });

    describe('閉区間同士の接続', () => {
        test('閉区間が別の閉区間と接続している(小区間, 大区間)', () => {
            const otherClosedRange: ClosedRange = new ClosedRange({ start: ME_END, end: ME_END + 2 });

            assert.equal(closedRange.isConnectedTo(otherClosedRange), true);
        })

        test('閉区間が別の閉区間と接続しているか(大区間, 小区間)', () => {
            const otherClosedRange: ClosedRange = new ClosedRange({ start: ME_START - 2, end: ME_START });

            assert.equal(closedRange.isConnectedTo(otherClosedRange), true);
        })

        test('閉区間が別の閉区間と接続していない(区間かぶりなし)', () => {
            const otherClosedRange: ClosedRange = new ClosedRange({ start: ME_START - 2, end: ME_START - 1 });

            assert.equal(closedRange.isConnectedTo(otherClosedRange), false);
        })

        test('閉区間が別の閉区間と接続していない(区間かぶりあり)', () => {
            const otherClosedRange: ClosedRange = new ClosedRange({ start: ME_START - 1, end: ME_START + 1 });

            assert.equal(closedRange.isConnectedTo(otherClosedRange), false);
        })
    });

});

