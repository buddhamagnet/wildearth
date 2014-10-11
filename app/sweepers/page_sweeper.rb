class PageSweeper < ActionController::Caching::Sweeper
      
  observe Refinery::Page
 
  def after_create(page)
    expire_cache_for(page)
  end
 
  def after_update(page)
    expire_cache_for(page)        
  end
 
  def after_destroy(page)
    expire_cache_for(page)
  end
      
  
  private
    
  def expire_cache_for(page)
    expire_fragment('menu')
  end
end
