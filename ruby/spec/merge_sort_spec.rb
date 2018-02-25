require 'merge_sort'
describe 'merge_sort' do
  context 'given an unsorted list' do
    it 'returns a sorted list' do
      expect(merge_sort([11,10])).to eql([10,11])
      expect(merge_sort([1,3,4,5,2])).to eql([1,2,3,4,5])
    end
  end
  context 'given nothing' do
    it 'returns nothing' do
      expect(merge_sort([])).to eql([])
    end
  end
end