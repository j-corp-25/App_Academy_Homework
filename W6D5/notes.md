# Views

```ruby
<%ruby code % > #executes ruby code that does not return anything
```

```ruby
<%= % > # embed the return value into the template, i.e., something that will actually show up in the HTML.
```

```ruby
class ProductsController < ApplicationController
  def index
    # get an array of all products, make it available to view
    @products = Product.all
    render :index
  end
end
```

```ruby
<h1>All the products!</h1>
<ul>
  <% @products.each do |product| %>
    <li>
      <%= product.name %>
    </li>
  <% end %>
</ul>
```
**It is good practice to make all your database queries inside the controller, setting the results to instance variables. Never make database queries in your views; it can make it harder to find hidden performance issues caused by unintended queries.**
