class TablesController < ApplicationController
  def bootstrap_sortable
    @title = 'Bootstrap Sortable - Tables'
  end

  def bootstrap_table
    @title = 'Bootstrap table - Tables'
  end

  def bootstrap
    @title = 'Bootstrap - Tables'
  end

  def datatables
    @title = 'DataTables - Tables'
  end

end
