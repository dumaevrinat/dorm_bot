import comp_vision.billparser as bp

p = bp.BillParser()
p.load_data('nofio.jpg')
name = p.get_full_name()
amount = p.get_amount()


