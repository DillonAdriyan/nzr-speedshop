-- NZR Speed Shop Database Schema

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  original_price INTEGER,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  badge TEXT CHECK (badge IN ('bestseller', 'sale', 'new')),
  discount INTEGER,
  description TEXT,
  stock INTEGER DEFAULT 100,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  shipping_address TEXT NOT NULL,
  shipping_city TEXT NOT NULL,
  shipping_province TEXT NOT NULL,
  shipping_postal_code TEXT NOT NULL,
  payment_method TEXT NOT NULL DEFAULT 'transfer',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled')),
  subtotal INTEGER NOT NULL,
  shipping_cost INTEGER DEFAULT 0,
  total INTEGER NOT NULL,
  tracking_number TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id),
  product_name TEXT NOT NULL,
  product_image TEXT NOT NULL,
  price INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-update updated_at on orders
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS policies
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "products_public_read" ON products;
DROP POLICY IF EXISTS "products_service_write" ON products;
DROP POLICY IF EXISTS "orders_public_insert" ON orders;
DROP POLICY IF EXISTS "orders_public_read" ON orders;
DROP POLICY IF EXISTS "orders_service_update" ON orders;
DROP POLICY IF EXISTS "order_items_public_insert" ON order_items;
DROP POLICY IF EXISTS "order_items_public_read" ON order_items;

-- Products: anyone can read
CREATE POLICY "products_public_read" ON products FOR SELECT USING (true);
-- Products: service role can manage (for admin later)
CREATE POLICY "products_service_write" ON products FOR ALL USING (true);

-- Orders: anyone can insert (guest checkout)
CREATE POLICY "orders_public_insert" ON orders FOR INSERT WITH CHECK (true);
-- Orders: anyone can read (tracking by order ID)
CREATE POLICY "orders_public_read" ON orders FOR SELECT USING (true);
-- Orders: service role can update (admin status changes)
CREATE POLICY "orders_service_update" ON orders FOR UPDATE USING (true);

-- Order items: anyone can insert
CREATE POLICY "order_items_public_insert" ON order_items FOR INSERT WITH CHECK (true);
-- Order items: anyone can read
CREATE POLICY "order_items_public_read" ON order_items FOR SELECT USING (true);

-- Seed products
INSERT INTO products (name, price, original_price, image, category, badge, discount, description, stock) VALUES
  ('Master Rem Brembo RCS 19', 4500000, 5200000, 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80', 'Pengereman', 'bestseller', NULL, 'Master rem radial Brembo RCS 19 original Italia. Performa pengereman terbaik untuk motor sport dan racing.', 25),
  ('Baut Probolt Gold RX King', 250000, NULL, 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80', 'Baut', 'new', NULL, 'Set baut Probolt warna gold untuk Yamaha RX King. Material titanium grade 5, ringan dan kuat.', 150),
  ('Velg RCB SP522', 1850000, 2100000, 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=600&q=80', 'Aksesoris', 'sale', 12, 'Velg racing RCB SP522 palang 5 spoke. Desain aerodinamis, ringan dan presisi tinggi.', 30),
  ('Kampas Rem Vesrah Racing', 385000, NULL, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', 'Pengereman', NULL, NULL, 'Kampas rem Vesrah racing compound untuk performa maksimal di lintasan dan jalanan.', 80),
  ('Piston Kit Kawahara 63mm', 750000, 890000, 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80', 'Mesin', 'sale', 16, 'Piston kit Kawahara oversize 63mm. Forged aluminium, cocok untuk bore up mesin.', 40),
  ('Knalpot Racing R9 H2', 2850000, NULL, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', 'Aksesoris', 'bestseller', NULL, 'Knalpot racing R9 H2 full system stainless steel. Suara racing, performa meningkat.', 15),
  ('Bearing Set TDR Racing', 425000, NULL, 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&q=80', 'Mesin', 'new', NULL, 'Set bearing TDR racing untuk kruk as dan transmisi. Presisi Jepang, tahan lama.', 60),
  ('Baut Body Set Titanium', 320000, 400000, 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80', 'Baut', 'sale', 20, 'Set baut body titanium grade 5 universal. Anti karat, ringan, tampilan premium.', 100),
  ('CDI Racing BRT Powermax', 1250000, NULL, 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80', 'Mesin', NULL, NULL, 'CDI racing BRT Powermax dual band. Mapping ignition optimal untuk performa maksimal.', 35),
  ('Spakbor Depan Carbon', 850000, NULL, 'https://images.unsplash.com/photo-1591378603223-e15b45a81640?w=600&q=80', 'Aksesoris', 'new', NULL, 'Spakbor depan carbon fiber asli. Ultra ringan, tahan panas, tampilan racing.', 20),
  ('Master Rem Nissin Radial', 3200000, NULL, 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&q=80', 'Pengereman', 'bestseller', NULL, 'Master rem Nissin radial 19mm original. Biting kuat, modulasi halus, untuk motor sport.', 18),
  ('Baut Probolt Stainless Set', 180000, 220000, 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&q=80', 'Baut', 'sale', 18, 'Set baut Probolt stainless steel universal. Anti karat, presisi tinggi.', 200)
ON CONFLICT DO NOTHING;
