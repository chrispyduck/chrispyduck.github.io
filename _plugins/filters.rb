module Jekyll
  module DateFilter
    require 'date'
    def date_sort(collection)
      collection.sort_by do |el|
        Date.parse(el.data['date'], '%Y-%m-%d')
      end
    end
  end
end
Liquid::Template.register_filter(Jekyll::DateFilter)