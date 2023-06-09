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

```ruby
!-- app/views/user/new.html.erb -->
<%= render "form", user: @user, action: :new %>

<!-- app/views/user/edit.html.erb -->
<%= render "form", user: @user, action: :edit %>

<!-- app/views/user/_form.html.erb -->
<!-- Is this a new user to create, or an existing one to edit? -->
<% action_url = (action == :new) ? users_url : user_url(user) %>

<form action="<%= action_url %>" method="post">
  <% if action == :edit %>
    <input type="hidden" name="_method" value="patch">
  <% end %>
  <!-- inputs go here... -->
</form>
```

```ruby
Rendering objects
It is typical to have to render model objects often. Here's the long way:

<% @cats.each do |cat| %>
  <%= render "cat", cat: cat %>
<% end %>
There is a shorthand for this:

<% @cats.each do |cat| %>
  <%= render cat %>
<% end %>
```

```ruby
<!-- app/views/user/new.html.erb -->
<!-- controller has set `@user` -->
<%= render "form" %>

<!-- app/views/user/_form.html.erb -->
<!-- Is this a new user to create, or an existing one to edit? -->
<% action_url = @user.persisted? ? user_url(@user) : users_url %>

<form action="<%= action_url %>" method="post">
  <% if @user.persisted? %>
    <input type="hidden" name="_method" value="put">
  <% end %>
  <!-- inputs go here... -->
</form>
```

![BasicHashStructure](./hwsnips/Screenshot%202023-06-08%20at%206.38.06%20PM.png)



